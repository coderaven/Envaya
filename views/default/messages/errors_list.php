<?php
    /**
     * Lists system messages
     * @uses $vars['object'] An array of system messages
     */

    if (!empty($vars['object']) && is_array($vars['object'])) {

?>
    <div class="message_container">
    <div class="bad_messages">
<?php        
        foreach($vars['object'] as $message) {
            echo "<p>$message</p>";
        }
?>
    </div>
    </div>
<?php
    }
?>
