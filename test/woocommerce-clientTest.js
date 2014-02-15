#!/usr/bin/env node

var assert = require('assert')
	, rewire = require('rewire')
	, sinon = require('sinon')

describe('WooCommerce Client', function(){

	var config = {
			consumerKey: '12345'
			,consumerSecret: '67890'
		}
		,obj
		,wc

	beforeEach(function(done){

		obj  = rewire('../lib/woocommerce-client')
		wc = obj.__get__("WooCommerce")

		obj.setConfig(config)

		done()
	})

	afterEach(function(done){

		done()
	})

	it('Constructs WooCommerce', function(done){

		//check constructs normally
		var actual = obj.__get__("wc.config")
		assert.deepEqual(actual, config)

		//check calls error method if no config passed
		var WooCommerce = obj.__get__("WooCommerce")
			, spy = sinon.spy()
		WooCommerce.prototype.error = spy

		var foo = new WooCommerce()
		assert.equal(spy.called, true)
		
		done()
	})

	it('throws error', function(done){

		var err_method = obj.__get__("WooCommerce.prototype.error")
			, err = 'Foo error'
			, fn = function(){ err_method(err) }

		assert.throws(fn, err)

		done()
	})
})