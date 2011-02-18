<?php

    /**
     * Displays a checkbox input field
     *
     * @uses $vars['value'] The current value, if any
     * @uses $vars['js'] Any Javascript to enter into the input tag
     * @uses $vars['name'] The name of the input field
     * @uses $vars['options'] An array of strings representing the label => options for the checkbox field
     *
     */

    $class = @$vars['class'];
    if (!$class) $class = "input-checkboxes";

    $vars['value'] = restore_input($vars['name'], @$vars['value']);

    $valIsArray = is_array($vars['value']);

    if ($valIsArray)
    {
        $valarray = $vars['value'];
        $valarray = array_map('strtolower', $valarray);
    }
    else
    {
        $val = strtolower($vars['value']);
    }

    foreach($vars['options'] as $option => $label)
    {
        if ($valIsArray)
        {
            $isSelected = in_array(strtolower($option),$valarray);
        }
        else
        {
            $isSelected = (strtolower($option) == $val);
        }

        $selected = ($isSelected) ? "checked = \"checked\"" : "";

        $id = (isset($vars['id'])) ? "id=\"{$vars['id']}\"" : '';

        $disabled = (@$vars['disabled']) ? ' disabled="yes" ' : '';
        $js = @$vars['js'] ?: '';
        echo "<label class='optionLabel'><input type=\"checkbox\" $id $disabled {$js} name=\"{$vars['name']}[]\" value=\"".escape($option)."\" {$selected} class=\"$class\" />".escape($label)."</label><br />";
    }

?>