/*
 * Written by xPaw
 *
 * CloudFlare: https://www.cloudflare.com/apps/abetterbrowser
 *
 * Website: http://xpaw.ru
 * GitHub: https://github.com/xPaw/CF-ABetterBrowser
 */

CloudFlare.define( 'abetterbrowser', [ 'cloudflare/dom' ], function( dom )
{
	if( dom.internetExplorer !== undefined && dom.internetExplorer < 8 )
	{
		var cssCode = '#bad_browser { border-bottom: 1px solid #000; background: #45484d; position: absolute; z-index: 10000; width: 100%; top: 0; left: 0; padding: 8px 0; font-family: "Segoe UI", sans-serif; font-size: 18px; text-align: center; color: #FFF; } #bad_browser a { text-decoration: underline; color: #EBEBF4 } #bad_browser a:hover, #bad_browser a:active { text-decoration: none; color: #dbdbeb }';
		
		// Create <style> element
		var style = dom.createElement( 'style' );
		dom.setAttribute( style, 'type', 'text/css' );
		
		if( style.styleSheet )
		{
			style.styleSheet.cssText = cssCode;
		}
		else
		{
			style.innerHTML = cssCode;
		}
		
		// Create <div> element
		var wrapper = dom.createElement( 'div' );
		wrapper.id = 'bad_browser';
		wrapper.innerHTML = 'You are using an outdated browser. <a href="http://abetterbrowser.org/">More information &#187;</a>';
		
		// Append our elements
		document.getElementsByTagName( 'head' )[ 0 ].appendChild( style );
		document.getElementsByTagName( 'body' )[ 0 ].appendChild( wrapper );
	}
} );