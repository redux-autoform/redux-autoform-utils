import * as utils from '../src/index';
import { expect } from 'chai';

describe("Util test", function() {
    it("Test all utils function", function(done) {
        expect(utils.getDateLocalizer).to.be.a("function");
        expect(utils.getDisplayName).to.be.a("function");
        expect(utils.getFormat).to.be.a("function");
        expect(utils.getNumberLocalizer).to.be.a("function");
        expect(utils.setDateLocalizer).to.be.a("function");
        expect(utils.setNumberLocalizer).to.be.a("function");

        expect(new utils.ComponentFactory()).to.be.an("object");

        done();
    })
})