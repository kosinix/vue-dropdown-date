// Define a new component
function VueDropDownDate() {

}
// var moment = require('moment');
VueDropDownDate.date = {
    data: function () {
        return {
            year:"",
            // moment:moment,
            currentDay: null,
            months: [
                {
                    name: "January",
                    value: 1
                },
                {
                    name: "Febeuary",
                    value: 2
                },
                {
                    name: "March",
                    value: 3
                },
                {
                    name: "April",
                    value: 4
                },
                {
                    name: "May",
                    value: 5
                },
                {
                    name: "June",
                    value: 6
                },
                {
                    name: "July",
                    value: 7
                },
                {
                    name: "August",
                    value: 8
                },
                {
                    name: "september",
                    value: 9
                },
                {
                    name: "October",
                    value: 10
                },
                {
                    name: "November",
                    value: 11
                },
                {
                    name: "December",
                    value: 12
                }
            ],
            days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
        }
    },
    props: {
        id: {
            default: '',
            type: String,
            required: true
        },
        name: {
            default: '',
            type: String,
            required: true
        },
        className: {
            default: 'vue-dropdown-date',
            type: String
        },
    },
    methods: {
      setDay() {
        // this.currentTime = moment("2018-6-7").format('M');
       }
    },
    created: function(){
        // this.currentTime = moment("2018-6-7").format('M');
    },
    computed: {
       dateValue: function(){
        return this.year;
       }
    },
    template: '' +
'<div v-bind:class="className">'+
'<input type="hidden" v-bind:name="name" v-model="dateValue">'+
    '<div class="container">'+
        '<div class="row">'+
            '<div class="col-lg-4 ml-auto">'+
                '<div class="form-group">'+
                    '<select class="form-control">'+
                    '<option v-for="month in months" v-bind:value="month.value">{{month.name}}</option>'+
                    '</select>'+
                '</div>'+
            '</div>'+
            '<div class="col-lg-4">'+
                '<div class="form-group">'+
                    '<select class="form-control">'+
                    '<option v-for="day in days" v-bind:value="day">{{day}}</option>'+
                    '</select>'+
                '</div>'+
            '</div>'+
            '<div class="col-lg-4 mr-auto">'+
                '<div class="form-group">'+
                    '<input type="text" class="form-control" placeholder="YYYY" v-model="year" maxlength="4">'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>'+
'</div>'
};
