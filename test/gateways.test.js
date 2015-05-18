var expect    = require('chai').expect;
var _         = require("underscore");
var gateways  = require("../src/gateways.js");
var adapters  = require("../src/adapters.js");


describe("Getting gateway by country tests", function() {
    it ('returns the expected object when fetching Israel', function() {
		var israeliGateways = gateways.getGatewaysForCountry("IL");
		expect(israeliGateways).to.have.length.of(2);
    });
});


describe("English locale tests (en_US)", function() {
    it ('returns "Braintree" for "com.braintreegateway" (gateway name)', function() {
    	expect(gateways.getGatewayDisplayName("en_US", "com.braintreegateway")).to.equal("Braintree");
    });

    it ('returns "Merchant ID" for Braintree "merchantId" (gateway field)', function() {
    	expect(gateways.getGatewayFieldDisplayName("en_US", "com.braintreegateway", "merchantId")).to.equal("Merchant ID");
    });

});

describe("Invalid locale tests (xx_XX)", function() {
    it ('returns empty string for "com.braintreegateway" (gateway name)', function() {
    	expect(gateways.getGatewayDisplayName("xx_XX", "com.braintreegateway")).to.equal("");
    });

    it ('returns empty string for Braintree "merchantId" (gateway field)', function() {
    	expect(gateways.getGatewayFieldDisplayName("xx_XX", "com.braintreegateway", "merchantId")).to.equal("");
    });    
});
