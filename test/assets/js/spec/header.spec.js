describe("Header entity", function() {
    describe("Model", function() {
		beforeEach(function() {
			this.header = new ContactManager.Entities.Header();
		});

		afterEach(function() {
			delete this.header;
		});

        it("defines (de)selection functions", function() {
            expect(typeof(this.header.select)).to.equal("function");
            expect(typeof(this.header.deselect)).to.equal("function");
        });

        it("is selectable", function() {
			this.header.select();
			expect(this.header.selected).to.be.true;
			this.header.deselect();
			expect(this.header.selected).to.be.false;
		});

        it("is not 'selected' by default", function() {
			expect(this.header.selected).to.not.be.ok;
		});
    });

	describe("Collection", function() {
		beforeEach(function() {
			this.headers = ContactManager.Entities._initializeHeaders();
		});

		afterEach(function() {
			delete this.headers;
		});

		it("is for Header models");
		it("contains one model per navigation menu item");
		it("is single selectable");
		it("can be fetched with a 'header:entities' request");
		it("is a singleton when obtained by request");
	});
});
