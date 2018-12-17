import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';

Template.burger.helpers({
	unread() {
		return Session.get('unreadOutsideRoom') ? Session.get('unread') : 0;
	},

	isMenuOpen() {
		if (Session.equals('isMenuOpen', true)) {
			return 'menu-opened';
		}
	},

	embeddedVersion() {
		return RocketChat.Layout.isEmbedded();
	},
});
