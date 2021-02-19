pimcore.registerNS('pimcore.plugin.pimcoreDataHubBatchImportBundle.configuration.components.interpreter.xml');
pimcore.plugin.pimcoreDataHubBatchImportBundle.configuration.components.interpreter.xml = Class.create(pimcore.plugin.pimcoreDataHubBatchImportBundle.configuration.components.abstractOptionType, {

    type: 'xml',

    buildSettingsForm: function() {

        if(!this.form) {
            this.form = Ext.create('DataHub.BatchImport.StructuredValueForm', {
                defaults: {
                    labelWidth: 200,
                    width: 600
                },
                border: false,
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: t('plugin_pimcore_datahub_batch_import_configpanel_xml_xpath'),
                        name: this.dataNamePrefix + 'xpath',
                        value: this.data.xpath || '/root/item',
                        allowBlank: false,
                        msgTarget: 'under'
                    },{
                        xtype: 'textarea',
                        fieldLabel: t('plugin_pimcore_datahub_batch_import_configpanel_xml_schema'),
                        name: this.dataNamePrefix + 'schema',
                        value: this.data.schema || '',
                        grow: true,
                        width: 900,
                        scrollable: true
                    }

                ]
            });
        }

        return this.form;
    }

});