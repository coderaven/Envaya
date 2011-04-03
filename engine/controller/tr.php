<?php

class Controller_Tr extends Controller
{
    function action_translate()
    {
        $this->require_admin();
        PageContext::set_theme('editor');

        $props = get_input_array("prop");
        $from = get_input('from');
        
        $targetLang = get_input('targetlang') ?: Language::get_current_code();

        $area2 = array();

        foreach ($props as $propStr)
        {
            $guidProp = explode('.', $propStr);
            $guid = $guidProp[0];
            $prop = $guidProp[1];
            $isHTML = (int)$guidProp[2];

            $entity = get_entity($guid);

            if ($entity && $entity->can_edit() && $entity->get($prop))
            {
                $area2[] = view("translation/translate",
                    array(
                        'entity' => $entity,
                        'property' => $prop,
                        'targetLang' => $targetLang,
                        'isHTML' => $isHTML,
                        'from' => $from));
            }
        }

        $title = __("trans:translate");

        $body = view_layout("one_column_wide", view_title($title), implode("<hr><br>", $area2));

        $this->page_draw($title,$body);
    }

    function action_save_translation()
    {
        $this->require_login();
        $this->validate_security_token();

        $text = get_input('translation');
        $guid = get_input('entity_guid');
        $isHTML = (int)get_input('html');
        $property = get_input('property');
        $entity = get_entity($guid);

        if (!$entity->can_edit())
        {
            register_error(__("org:cantedit"));
            forward_to_referrer();
        }
        else
        {
            $origLang = $entity->get_language();

            $actualOrigLang = get_input('language');
            $newLang = get_input('newLang');

            if ($actualOrigLang != $origLang)
            {
                $entity->language = $actualOrigLang;
                $entity->save();
            }
            if ($actualOrigLang != $newLang)
            {
                $trans = $entity->lookup_translation($property, $actualOrigLang, $newLang, TranslateMode::ManualOnly, $isHTML);
                
                if (get_input('delete'))
                {
                    $trans->delete();
                }
                else
                {                
                    $trans->html = $isHTML;
                    $trans->owner_guid = Session::get_loggedin_userid();
                    $trans->value = $text;
                    $trans->save();
                }
            }

            system_message(__("trans:posted"));

            forward(get_input('from') ?: $entity->get_url());
        }
    }

    function action_translate_interface()
    {
        $this->require_login();

        if (get_input('exception'))
        {
            throw new Exception("test exception!");
        }

        $lang = 'sw';

        $key = get_input('key');

        if ($key)
        {
            $title = __("trans:item_title");
            $body = view_layout("one_column_padded", view_title($title), view("translation/interface_item", array('lang' => $lang, 'key' => $key)));
            $this->page_draw($title, $body);
        }
        else if (get_input('export'))
        {
            header("Content-type: text/plain");
            echo view("translation/interface_export", array('lang' => $lang));
        }
        else
        {
            $title = __("trans:list_title");
            $body = view_layout("one_column_wide", view_title($title), view("translation/interface_list", array('lang' => $lang)));
            $this->page_draw($title, $body);
        }
    }

    function action_save_interface_item()
    {
        $this->require_login();
        $this->validate_security_token();

        $key = get_input('key');
        $value = get_input('value');
        $lang = 'sw';

        $trans = InterfaceTranslation::get_by_key_and_lang($key, $lang);

        if (!$trans)
        {
            $trans = new InterfaceTranslation();
            $trans->key = $key;
            $trans->lang = $lang;
        }

        $trans->approval = 0;
        $trans->owner_guid = Session::get_loggedin_userid();
        $trans->value = $value;
        $trans->save();

        system_message(__("trans:posted"));

        forward(get_input('from'));
    }
}