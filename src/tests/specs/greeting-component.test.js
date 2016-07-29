System.register(['@angular/core/testing', '@angular/core', '../../app/components/user-service', '../../app/components/login-service', '../../app/components/greeting-component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var testing_1, core_1, user_service_1, login_service_1, greeting_component_1;
    var MockLoginService;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (greeting_component_1_1) {
                greeting_component_1 = greeting_component_1_1;
            }],
        execute: function() {
            MockLoginService = (function (_super) {
                __extends(MockLoginService, _super);
                function MockLoginService() {
                    _super.apply(this, arguments);
                }
                MockLoginService.prototype.login = function (pin) {
                    return Promise.resolve(true);
                };
                return MockLoginService;
            }(login_service_1.LoginService));
            describe('greeting component', function () {
                var builder;
                beforeEach(function () {
                    testing_1.addProviders([
                        core_1.provide(login_service_1.LoginService, { useClass: MockLoginService }),
                        user_service_1.UserService
                    ]);
                });
                beforeEach(testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
                    builder = tcb;
                }));
                it('should ask for PIN', testing_1.async(function () {
                    builder.createAsync(greeting_component_1.GreetingComponent).then(function (fixture) {
                        fixture.detectChanges();
                        var compiled = fixture.debugElement.nativeElement;
                        expect(compiled).toContainText('Enter PIN');
                        expect(compiled.querySelector('h3')).toHaveText('Status: Enter PIN');
                    });
                }));
                it('should change greeting', testing_1.async(function () {
                    builder.createAsync(greeting_component_1.GreetingComponent).then(function (fixture) {
                        fixture.detectChanges();
                        fixture.debugElement.componentInstance.greeting = 'Foobar';
                        fixture.detectChanges();
                        var compiled = fixture.debugElement.nativeElement;
                        expect(compiled.querySelector('h3')).toHaveText('Status: Foobar');
                    });
                }));
                it('should override the template', testing_1.async(function () {
                    builder.overrideTemplate(greeting_component_1.GreetingComponent, "<span>{{greeting}}<span>")
                        .createAsync(greeting_component_1.GreetingComponent).then(function (fixture) {
                        fixture.detectChanges();
                        var compiled = fixture.debugElement.nativeElement;
                        expect(compiled).toHaveText('Enter PIN');
                    });
                }));
                it('should accept pin', testing_1.async(function () {
                    builder.createAsync(greeting_component_1.GreetingComponent).then(function (fixture) {
                        fixture.detectChanges();
                        var compiled = fixture.debugElement.nativeElement;
                        compiled.querySelector('button').click();
                        fixture.debugElement.componentInstance.pending.then(function () {
                            fixture.detectChanges();
                            expect(compiled.querySelector('h3')).toHaveText('Status: Welcome!');
                        });
                    });
                }));
                it('should accept pin (with fakeAsync)', testing_1.fakeAsync(function () {
                    var fixture;
                    builder.createAsync(greeting_component_1.GreetingComponent).then(function (rootFixture) {
                        fixture = rootFixture;
                    });
                    testing_1.tick();
                    var compiled = fixture.debugElement.nativeElement;
                    compiled.querySelector('button').click();
                    testing_1.tick();
                    fixture.detectChanges();
                    expect(compiled.querySelector('h3')).toHaveText('Status: Welcome!');
                }));
            });
        }
    }
});
//# sourceMappingURL=greeting-component.test.js.map