app.config(function($routeSegmentProvider, $routeProvider) {

    $routeSegmentProvider.options.autoLoadTemplates = true;

    $routeSegmentProvider
        .when('/base', 's1')
        .when('/base/helloworld',   's1.helloworld')
        .when('/base/directivas',   's1.directivas')
        .when('/base/filtros',   's1.filtros')
        .segment('s1', {
            templateUrl: 'templates/home.html',
            controller: 'MainCtrl'})
            .within()
                .segment('home', {
                    default: true,
                    templateUrl: 'templates/base/home.html'})                
                .segment('helloworld', {
                    templateUrl: 'templates/base/helloworld.html'})
                .segment('directivas', {
                    templateUrl: 'templates/base/directivas.html'})
            .up()



    $routeSegmentProvider
        .when('/base/directivas/interpolation', 's1.directivas.interpolation')  
        .when('/base/directivas/ngbind', 's1.directivas.ngbind')  
        .within('s1')
            .within('directivas')
                .segment('interpolation', {default: true, templateUrl: 'templates/base/directivas/interpolation.html'})
                .segment('ngbind', {templateUrl: 'templates/base/directivas/ngbind.html'})


    $routeProvider.otherwise({redirectTo: '/base'}); 
}) ;
