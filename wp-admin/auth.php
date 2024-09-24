<?php
require_once(ABSPATH . '/wp-config.php');

if ( (!empty($_COOKIE['wordpressuser_' . $cookiehash]) && !wp_login($_COOKIE['wordpressuser_' . $cookiehash], $_COOKIE['wordpresspass_' . $cookiehash], true))
	|| (empty($_COOKIE['wordpressuser_' . $cookiehash])) ) {
	header('Expires: Wed, 5 Jun 1979 23:41:00 GMT'); // Michel's birthday
	header('Last-Modified: ' . gmdate('D, d M Y H:i:s') . ' GMT');
	header('Cache-Control: no-cache, must-revalidate');
	header('Pragma: no-cache');

	header('Location: ' . get_settings('siteurl') . '/wp-login.php?redirect_to=' . urlencode($_SERVER['REQUEST_URI']));
	exit();
}

?>
