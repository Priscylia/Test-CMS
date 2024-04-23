<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'wp_woocommerce' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'k|1^dpH!;[:?BAw6f?$Po71>{AN+_Ts/N&c;<b@k90Gb!8&sr6Y5L}lZ:(s:q]Vm' );
define( 'SECURE_AUTH_KEY',  'Q0/raHS2Tn;}WZ-Q~jL[;dXodr0{(Y&Z-4?+ _g<a(bkF]X3eG$N2,UQfJr.-Ap&' );
define( 'LOGGED_IN_KEY',    '%;mkps@(U0@)Pra=>aq|O8]<aBu/w7^9JHGL?w(hQ.w:U~mQxtg71*,c]8]@I>}z' );
define( 'NONCE_KEY',        '@6g./6xzhS/<NYLB!S3!4r_:Fc6av#O<&^W$n}90L8$XAiVWDPl4KC{*T}4l9+wI' );
define( 'AUTH_SALT',        'Cbt;Dw=_XUm%V:;hES7FA-:sz LG_!?b(+]Wrwb-lTnfixwyhc7f6[XZ)At>:yy(' );
define( 'SECURE_AUTH_SALT', 'h5=n_!<rnd7+_wdgfj*k4GJj_XC9J[[=]-aC:9j9[[M$OT] OIE gDRjbVDcN6e@' );
define( 'LOGGED_IN_SALT',   '&hV^,nX)X.W|IN-p^/zEE}lu}XS(&GKk:Z3!0LSHYO!iLQD:K7?V)Uhj<a,T-{[k' );
define( 'NONCE_SALT',       'A]BcX[*~!;Z$:=s6G,l2[vQtTZY*4L5c99p_ss+%-o1O[,w<B+Pr5v.[R PQu@ZD' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
