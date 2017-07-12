# A-MAMI 

## Production Notes


### Code Snippets:

##### previously deleted from:

ie9.scss:


     @mixin banner-bg($image, $overlay: false) {
		
		@if $overlay {
		
			> * {
				position: relative;
				z-index: 1;
			}
			
			&:before {
				content: '';
				display: block;
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				background: _palette(accent4, bg-alt);
				opacity: 0.6;
			}
		}

		position: relative;
		background-image: url($image);
		background-position: center center;
		background-size: cover;
		background-attachment: fixed;
		background-repeat: no-repeat;
	}
	

a-mami.scss:

    @mixin banner-bg($image, $overlay: false) {
		$background-image: (
			'url("images/overlay.")',
			'linear-gradient(45deg, #{transparentize(_palette(gradient1), 0.35)}, #{transparentize(_palette(gradient2), 0.35)})',
			'url("#{$image}")'
		);

		$background-size: (
			auto,
			cover,
			cover
		);

		$background-attachment: (
			fixed,
			fixed,
			fixed
		);

		$background-repeat: (
			repeat,
			no-repeat,
			no-repeat
		);

		@if $overlay {
			$background-image: join(('linear-gradient(from top, #{_palette(accent4, bg)}, #{_palette(accent4, bg)})'), $background-image);
			$background-size: join((auto), $background-size);
			$background-attachment: join((fixed), $background-attachment);
			$background-repeat: join((repeat), $background-repeat);
		}

		@include vendor('background-image', $background-image);
		background-position: center center;
		background-size: $background-size;
		background-attachment: $background-attachment;
		background-repeat: $background-repeat;
	}