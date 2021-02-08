'use strict';

angular.module('insight.networks')
	.factory('Networks',
		function(Constants, CcSCoreLib) {
			return {
				getCurrentNetwork: function () {
					return CcSCoreLib.Networks.get(Constants.NETWORK);
				}
			}
		});