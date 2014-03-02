(function( doc, ua ) {
	if (
		"-ms-user-select" in doc.documentElement.style &&
		(
			ua.match(/IEMobile\/10\.0/) ||
			ua.match(/ZuneWP7/) ||
			ua.match(/WPDesktop/)
		)
	) {
		var msViewportStyle = doc.createElement("style");
		msViewportStyle.appendChild(
			doc.createTextNode("@-ms-viewport{width:auto!important}")
		);
		doc.getElementsByTagName("head")[0].appendChild(msViewportStyle);
	}
})( document, navigator.userAgent );
