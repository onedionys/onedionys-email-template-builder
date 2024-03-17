const assert = require('assert');
const EmailTemplateBuilder = require('../src');

describe('EmailTemplateBuilder', function() {
    describe('#buildTemplate()', function() {
        it('should generate email template', function() {
            const emailBuilder = new EmailTemplateBuilder();
            const templateData = {
                name: 'John Doe',
                message: 'Hello World!'
            };
            const expectedTemplate = "Generated email template";

            assert.strictEqual(emailBuilder.buildTemplate(templateData), expectedTemplate);
        });
    });
});
