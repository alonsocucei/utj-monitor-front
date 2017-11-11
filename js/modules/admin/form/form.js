define([
    'ojs/ojcore',
    'jquery',
    'knockout',
    'view-models/GeneralViewModel',
    'ojs/ojknockout',
    'ojs/ojradioset',
    'ojs/ojswitch',
    'ojs/ojcollapsible',
    'ojs/ojinputtext',
    'ojs/ojselectcombobox',
    'ojs/ojdatetimepicker',
    'ojs/ojinputnumber'
], function (oj, $, ko, GeneralViewModel) {

    function FormViewModel() {
        var self = this;

        /*
         * Main section.
         */
        // Type option
        self.typeLabel = GeneralViewModel.nls("admin.indicators.form.sections.main.type");
        self.typeValue = ko.observable('PIDE');

        // Active/Inactive option
        self.activeLabel = GeneralViewModel.nls("admin.indicators.form.sections.main.active");
        self.activeValue = ko.observable(true);
        
        // Date converter
        var dateOptions = { formatStyle: 'date', pattern: 'dd/MM/yyyy' };
        self.dateConverter = oj.Validation.converterFactory("datetime").createConverter(dateOptions);

        /*
         * General section.
         */
        self.generalTitle = GeneralViewModel.nls("admin.indicators.form.sections.general.title");

        // Update option
        self.updateLabel = GeneralViewModel.nls("admin.indicators.form.sections.general.update");
        self.updateValue = ko.observable('Manual');

        // Name field
        self.nameLabel = GeneralViewModel.nls("admin.indicators.form.sections.general.name.label");
        self.namePlaceholder = GeneralViewModel.nls("admin.indicators.form.sections.general.name.placeholder");
        self.nameValue = ko.observable("");

        // Description field
        self.descriptionLabel = GeneralViewModel.nls("admin.indicators.form.sections.general.description.label");
        self.descriptionPlaceholder = GeneralViewModel.nls("admin.indicators.form.sections.general.description.placeholder");
        self.descriptionValue = ko.observable("");

        // Sense option
        self.senseLabel = GeneralViewModel.nls("admin.indicators.form.sections.general.sense");
        self.senseOptions = ko.observableArray([
            { value: 'Positivo', label: 'Positivo' },
            { value: 'Negativo', label: 'Negativo' }
        ]);
        self.senseValue = ko.observable('Positivo');

        // Unit of measurement field
        self.measureLabel = GeneralViewModel.nls("admin.indicators.form.sections.general.measure.label");
        self.measurePlaceholder = GeneralViewModel.nls("admin.indicators.form.sections.general.measure.placeholder");
        self.measureValue = ko.observable("");

        // Base year field
        self.baseYearLabel = GeneralViewModel.nls("admin.indicators.form.sections.general.baseYear.label");
        self.baseYearPlaceholder = GeneralViewModel.nls("admin.indicators.form.sections.general.baseYear.placeholder");
        self.baseYearValue = ko.observable("");

        // Periodicity option
        self.periodicityLabel = GeneralViewModel.nls("admin.indicators.form.sections.general.periodicity");
        self.periodicityOptions = ko.observableArray([
            { value: 'Mensual', label: 'Mensual' },
            { value: 'Trimestral', label: 'Trimestral' },
            { value: 'Cuatrimestral', label: 'Cuatrimestral' },
            { value: 'Semestral', label: 'Semestral' },
            { value: 'Anual', label: 'Anual' }
        ]);
        self.periodicityValue = ko.observable('Mensual');

        // Reboot option
        self.rebootLabel = GeneralViewModel.nls("admin.indicators.form.sections.general.reboot");
        self.rebootOptions = ko.observableArray([
            { value: 'Continuo', label: 'Continuo' },
            { value: 'Cuatrimestral', label: 'Cuatrimestral' },
            { value: 'Anual', label: 'Anual' }
        ]);
        self.rebootValue = ko.observable('Continuo');

        // Reboot date field
        self.rebootDateLabel = GeneralViewModel.nls("admin.indicators.form.sections.general.rebootDates");
        self.rebootDateValue1 = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
        self.rebootDateValue2 = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
        self.rebootDateValue3 = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));

        /*
         * Alignment section
         */
        self.alignmentTitle = GeneralViewModel.nls("admin.indicators.form.sections.alignment.title");

        /*
         * Responsible section
         */
        self.responsibleTitle = GeneralViewModel.nls("admin.indicators.form.sections.responsible.title");

        // Secretary option
        self.secretaryLabel = GeneralViewModel.nls("admin.indicators.form.sections.responsible.secretary");
        self.secretaryOptions = ko.observableArray([
            { value: 'Académica', label: 'Académica' },
            { value: 'Administrativa', label: 'Administrativa' },
            { value: 'Vinculación', label: 'Vinculación' },
            { value: 'Rectoría', label: 'Rectoría' }
        ]);
        self.secretaryValue = ko.observable('Administrativa');

        // Address option
        self.addressLabel = GeneralViewModel.nls("admin.indicators.form.sections.responsible.address");
        self.addressValue = ko.observable("Dirección 1");

        // Department head option
        self.departmentHeadLabel = GeneralViewModel.nls("admin.indicators.form.sections.responsible.departmentHead");
        self.departmentHeadValue = ko.observable('Jefe de departamento');

        // Responsible option
        self.responsibleLabel = GeneralViewModel.nls("admin.indicators.form.sections.responsible.responsible");
        self.responsibleValue = ko.observable('Persona responsable de la información');

        // Responsible charge field
        self.responsibleChargeLabel = GeneralViewModel.nls("admin.indicators.form.sections.responsible.responsibleCharge.label");
        self.responsibleChargePlaceholder = GeneralViewModel.nls("admin.indicators.form.sections.responsible.responsibleCharge.placeholder");
        self.responsibleChargeValue = ko.observable("");

        // Email field
        self.emailLabel = GeneralViewModel.nls("admin.indicators.form.sections.responsible.email.label");
        self.emailPlaceholder = GeneralViewModel.nls("admin.indicators.form.sections.responsible.email.placeholder");
        self.emailValue = ko.observable("");

        // Phone field
        self.phoneLabel = GeneralViewModel.nls("admin.indicators.form.sections.responsible.phone.label");
        self.phonePlaceholder = GeneralViewModel.nls("admin.indicators.form.sections.responsible.phone.placeholder");
        self.phoneValue = ko.observable("");

        // Extension field
        self.extensionLabel = GeneralViewModel.nls("admin.indicators.form.sections.responsible.extension.label");
        self.extensionPlaceholder = GeneralViewModel.nls("admin.indicators.form.sections.responsible.extension.placeholder");
        self.extensionValue = ko.observable("");

        // Observations field
        self.observationsRLabel = GeneralViewModel.nls("admin.indicators.form.sections.responsible.observations");
        self.observationsRValue = ko.observable("");

        /*
         * Metadata section 
         */
        self.metadataTitle = GeneralViewModel.nls("admin.indicators.form.sections.metadata.title");
        
        // Source field
        self.sourceLabel = GeneralViewModel.nls("admin.indicators.form.sections.metadata.source.label");
        self.sourcePlaceholder = GeneralViewModel.nls("admin.indicators.form.sections.metadata.source.placeholder");
        self.sourceValue = ko.observable("");

        // Link field
        self.linkLabel = GeneralViewModel.nls("admin.indicators.form.sections.metadata.link.label");
        self.linkPlaceholder = GeneralViewModel.nls("admin.indicators.form.sections.metadata.link.placeholder");
        self.linkValue = ko.observable("");

        // Formula field
        self.formulaLabel = GeneralViewModel.nls("admin.indicators.form.sections.metadata.formula.label");
        self.formulaPlaceholder = GeneralViewModel.nls("admin.indicators.form.sections.metadata.formula.placeholder");
        self.formulaValue = ko.observable("");

        // Variables field
        self.variablesLabel = GeneralViewModel.nls("admin.indicators.form.sections.metadata.variables.label");
        self.variablesPlaceholder = GeneralViewModel.nls("admin.indicators.form.sections.metadata.variables.placeholder");
        self.variablesValue = ko.observable("");

        // Method field
        self.methodLabel = GeneralViewModel.nls("admin.indicators.form.sections.metadata.method.label");
        self.methodPlaceholder = GeneralViewModel.nls("admin.indicators.form.sections.metadata.method.placeholder");
        self.methodValue = ko.observable("");

        // Observations field
        self.observationsMLabel = GeneralViewModel.nls("admin.indicators.form.sections.metadata.observations.label");
        self.observationsMPlaceholder = GeneralViewModel.nls("admin.indicators.form.sections.metadata.observations.placeholder");
        self.observationsMValue = ko.observable("");

        // Score
        self.scoreLabel = GeneralViewModel.nls("admin.indicators.form.sections.metadata.score.label");

        // Score to percent converter
        self.scoreConverter = GeneralViewModel.converters.percent;

        // Red score field
        self.redLabel = GeneralViewModel.nls("admin.indicators.form.sections.metadata.score.red");
        self.redValue = ko.observable(0.35);

        // Orange score field
        self.orangeLabel = GeneralViewModel.nls("admin.indicators.form.sections.metadata.score.orange");
        self.orangeValue = ko.observable(0.6);

        // Yello score field
        self.yellowLabel = GeneralViewModel.nls("admin.indicators.form.sections.metadata.score.yellow");
        self.yellowValue = ko.observable(0.8);

        // Green score field
        self.greenLabel = GeneralViewModel.nls("admin.indicators.form.sections.metadata.score.green");
        self.greenValue = ko.observable(1);

        /*
         * Goals and progress section
         */
        self.goalsTitle = GeneralViewModel.nls("admin.indicators.form.sections.goals.title");
    }

    return new FormViewModel();
});