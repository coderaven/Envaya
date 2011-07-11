<?php

/* 
 * A container widget that displays child widgets as an ordered list of links to child pages.
 */
class Widget_Menu extends Widget_Generic
{
    function render_view($args = null)
    {
        return view("widgets/menu_view", array('widget' => $this));
    }

    function render_edit()
    {
        return view("widgets/menu_edit", array('widget' => $this));
    }
    
    function render_child_view($widget, $args)
    {
        return view('widgets/menu_nav', array(
            'content' => $widget->render_view($args), 
            'widget' => $widget
        ));
    }        
    
    function render_add_child()
    {
        return view("widgets/add_section", array('widget' => $this));
    }
    
    function new_child_widget_from_input()
    {        
        $widget = $this->get_widget_by_name(get_input('uniqid'));
        
        if (!$widget->guid)
        {
            $last_widget = $this->query_widgets()->order_by('menu_order desc')->get();
            if ($last_widget)
            {
                $widget->menu_order = $last_widget->menu_order + 1;
            }
        }
        return $widget;
    }
}