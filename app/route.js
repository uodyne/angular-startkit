app.config(function($routeSegmentProvider, $routeProvider) {

    $routeSegmentProvider.options.autoLoadTemplates = true;

    $routeSegmentProvider
        .when('/home', 'home')
        .when('/base', 'base')
        .when('/routesegment', 'routesegment')
        .when('/base/helloworld',   'base.helloworld')
        .when('/base/directivas',   'base.directivas')
        .when('/base/filtros',      'base.filtros')
        .segment('home', {
            default: true, 
            controller: 'TodoController',
            templateUrl: 'templates/home.html',
            resolve:{data:function(loader){loader.show=true;}}
            })
        .segment('base', {
            templateUrl: 'templates/base.html',
            resolve:{data:function(loader){loader.show=true;}},
            controller: 'MyappCtrl'})
            .within()
                .segment('helloworld', {
                    default: true,
                    templateUrl: 'templates/base/helloworld.html',
                    resolve:{data:function(loader){loader.show=true;}},
                    untilResolved:{templateUrl:'templates/loading.html'}
                })
                .segment('directivas', {
                    templateUrl: 'templates/base/directivas.html',
                    resolve:{data:function(loader){loader.show=true;}},
                    untilResolved:{templateUrl:'templates/loading.html'}
                })
                .segment('filtros', {
                    templateUrl: 'templates/base/filtros.html',
                    resolve:{data:function(loader){loader.show=true;}},
                    untilResolved:{templateUrl:'templates/loading.html'}
                })
            .up()
        .segment('routesegment', {
            templateUrl: 'templates/routesegment.html',
            resolve:{data:function(loader){loader.show=true;}},
            untilResolved:{templateUrl:'templates/loading.html'}
            })



    $routeSegmentProvider
        .when('/base/directivas/interpolation', 'base.directivas.interpolation')  
        .when('/base/directivas/ngbind', 'base.directivas.ngbind') 
        .when('/base/directivas/ngshowhide', 'base.directivas.ngshowhide')  
        .when('/base/directivas/ngswitch', 'base.directivas.ngswitch')  
        .when('/base/directivas/ngif', 'base.directivas.ngif')  
        .when('/base/directivas/nginclude', 'base.directivas.nginclude')  
        .when('/base/directivas/ngrepeat', 'base.directivas.ngrepeat')  
        .within('base')
            .within('directivas')
                .segment('interpolation', {default: true, templateUrl: 'templates/base/directivas/interpolation.html', resolve:{data:function(loader){loader.show=true;}},untilResolved:{templateUrl:'templates/loading.html'}})
                .segment('ngbind', {templateUrl: 'templates/base/directivas/ngbind.html', resolve:{data:function(loader){loader.show=true;}},untilResolved:{templateUrl:'templates/loading.html'}})
                .segment('ngshowhide', {templateUrl: 'templates/base/directivas/ngshowhide.html', resolve:{data:function(loader){loader.show=true;}},untilResolved:{templateUrl:'templates/loading.html'}})
                .segment('ngswitch', {templateUrl: 'templates/base/directivas/ngswitch.html', resolve:{data:function(loader){loader.show=true;}},untilResolved:{templateUrl:'templates/loading.html'}})
                .segment('ngif', {templateUrl: 'templates/base/directivas/ngif.html', resolve:{data:function(loader){loader.show=true;}},untilResolved:{templateUrl:'templates/loading.html'}})
                .segment('nginclude', {templateUrl: 'templates/base/directivas/nginclude.html', resolve:{data:function(loader){loader.show=true;}},untilResolved:{templateUrl:'templates/loading.html'}})
                .segment('ngrepeat', {templateUrl: 'templates/base/directivas/ngrepeat.html', resolve:{data:function(loader){loader.show=true;}},untilResolved:{templateUrl:'templates/loading.html'}})

    $routeSegmentProvider
            .when('/base/filtros/formatting', 'base.filtros.formatting')  
            .when('/base/filtros/array', 'base.filtros.array') 
            .when('/base/filtros/chaining', 'base.filtros.chaining')  
            .when('/base/filtros/tovariables', 'base.filtros.tovariables')  
            .when('/base/filtros/custom', 'base.filtros.custom')  
            .within('base')
                .within('filtros')
                    .segment('formatting', {default: true, templateUrl: 'templates/base/filtros/formatting.html', resolve:{data:function(loader){loader.show=true;}},untilResolved:{templateUrl:'templates/loading.html'}})
                    .segment('array', {templateUrl: 'templates/base/filtros/array.html', resolve:{data:function(loader){loader.show=true;}},untilResolved:{templateUrl:'templates/loading.html'}})
                    .segment('chaining', {templateUrl: 'templates/base/filtros/chaining.html', resolve:{data:function(loader){loader.show=true;}},untilResolved:{templateUrl:'templates/loading.html'}})
                    .segment('tovariables', {templateUrl: 'templates/base/filtros/tovariables.html', resolve:{data:function(loader){loader.show=true;}},untilResolved:{templateUrl:'templates/loading.html'}})
                    .segment('custom', {templateUrl: 'templates/base/filtros/custom.html', resolve:{data:function(loader){loader.show=true;}},untilResolved:{templateUrl:'templates/loading.html'}})


    $routeProvider.otherwise({redirectTo: '/home'}); 
}) ;
