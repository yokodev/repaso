angular.module('TestApp',[]);

angular.module('TestApp')
    .controller('MainController',ctrlFunc);


function ctrlFunc(){
    this.message = 'hello';
    this.people = [
        {
            firstname: 'jane',
            lastname : 'doe'
        },
        {
            firstname: 'jon',
            lastname : 'doe'
        },
        {
            firstname: 'jin',
            lastname : 'doe'
        }
    ];
}