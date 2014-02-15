#!/usr/bin/env node

/**
 * The WooCommerce Client
 *
 * @constructor
 * @this {WooCommerce}
 * @param {object} o The configuration object, must have 'consumerKey' and 
 * 'consumerSecret'
 */
var WooCommerce = function WooCommerce(o){

	var self = this

	if(!o || typeof o !== 'object')
		self.error('No configuration passed to WooCommerce')

	else if( typeof o.consumerKey !== 'string' || typeof o.consumerSecret !== 'string') 
		self.error('No consumer key or secret passed');

	this.config = o
}

/**
 * Handles errors.
 * @param  {string} msg The error message
 */
WooCommerce.prototype.error = function(msg){

	throw Error(msg)
}

var wc

module.exports = {

	"setConfig" : function(o){
		wc = new WooCommerce(o)
	},
}