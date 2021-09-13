<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'shreyansh' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'miZe0?BwpZ[hH<N54h~3fZlP=f:.bMr)BzbJ>&Vx^6|.pD}#g~}q`7Scr=W5X_[A' );
define( 'SECURE_AUTH_KEY',  'FiHY$E*q{W,ELL3AF|/[ }kq%2}J^XLkUyKEU$r&#0Jz4[43taqN4O(]e}bHBz79' );
define( 'LOGGED_IN_KEY',    'bTX29ak-bWl$El,,6X~bkkA:4#SrJ/xBj5)g5dWkzHSFFb*Z)UqtiIPbTx5gK-]}' );
define( 'NONCE_KEY',        'Qaf%kguz4k/%o?U$uRlm,yRc~i3PWb8@0=&,6& @3Jf=gGh<~7| j$S[D6=IQ-u&' );
define( 'AUTH_SALT',        'Lknk2D^0+psH1N([tN+%udbSSei.aX,i!k7Cs{Chg C$asPBPBBI7$%F#sBsV:Z+' );
define( 'SECURE_AUTH_SALT', '-6](nW(G-j/m!ndV)<Ru} @8x6*4Wtr*(b.N>wI^oY)YVH)4v.3W[g=U(?fe17aN' );
define( 'LOGGED_IN_SALT',   'V-<}=JQY@;)T),sCO3],223Km##X<U  jxbS7)Awq+BAK1lyjX=f~Wt=IiX6ii49' );
define( 'NONCE_SALT',       '.=KWR`lm,lrb(?#4Gzs1Z*sRNTnT6KM:wf+!V^B_Y_2stWL)9BZ$tgi<%J><*V!%' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

set_time_limit(1000);