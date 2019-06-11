define(
        [
            'view-models/GeneralViewModel'
        ],
        function (GeneralViewModel) {
            var adminItems = {
                strategic: {
                    id: "strategic",
                    label: GeneralViewModel.nls("admin.strategic.label"),
                    module: {
                        name: "admin/strategic/strategic"
                    }
                },
                indicators: {
                    id: "indicators",
                    label: GeneralViewModel.nls("admin.indicators.label"),
                    module: {
                        name: "admin/indicators/indicators"
                    }
                },
                pe: {
                    id: "pe",
                    label: GeneralViewModel.nls("admin.pe.label"),
                    module: {
                        name: "admin/pe/pe"
                    }
                },
                data: {
                    id: "data",
                    label: GeneralViewModel.nls("admin.data.label"),
                    module: {
                        name: "admin/data/data"
                    }
                },
//                editPoa: {
//                    id: "editPoa",
//                    label: GeneralViewModel.nls("admin.poa.label1"),
//                    module: {
//                        name: "admin/poa/editPoa"
//                    }
//                },
//                form: {
//                    id: "form",
//                    label: "Formulario Indicadores",
//                    module: {
//                        name: "admin/form/form"
//                    }
//                }
                
            };
            
            return adminItems;
        }
);