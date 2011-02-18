<?php
$report = $vars['report'];
$submit = $vars['submit'];
?>

<div class='section_content padded report_view'>

<?php
if ($submit)  {
?>

<div class='report_preview_message'>
<p>
<?php echo __('report:verify_instructions'); ?></p>
<p>
<?php echo __('report:to_make_changes'); ?>
</p>
<p class='last-paragraph'>
<?php echo __('report:how_to_submit'); ?>
</p>
</div>

<?php
}
?>


<?php
echo $report->render_view();
?>

<?php
if ($submit)  {
?>

<form method='POST' action='<?php echo $report->get_url(); ?>/submit'>
<?php echo view('input/securitytoken'); ?>

<div class='report_preview_message'>

<p>
<?php echo __('report:type_signature'); ?>
</p>
<p>
<?php echo __('report:cant_edit_after_submit'); ?>
</p>

<?php echo __('report:signature'); ?>:
<?php
    echo view('input/text', array('name' => 'signature', 'js' => 'style="width:250px"', 'id' => 'signature'));
?>
<br />

<script type='text/javascript'>
function verifyConfirmed()
{
    if (!document.getElementById('signature').value)
    {
        alert(<?php echo json_encode(__('report:error_no_signature')); ?>);
        return false;
    }
    return true;
}
</script>

<?php
    echo view('input/submit', array(
        'name' => '_submit',
        'value' => __('report:submit'), 
        'js' => "onclick='return verifyConfirmed() && setSubmitted()'"
    ));
?>
</div>
</form>

<?php
}
?>

</div>

