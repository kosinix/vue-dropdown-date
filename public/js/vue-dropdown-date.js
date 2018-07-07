// Define a new component
function VueDropDownDate() {

}
// var moment = require('moment');
VueDropDownDate.date = {
    data: function () {
        return {
            year: moment().format('YYYY'),
            month: moment().format('M'),
            day: moment().format('D'),
            months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
        value: {
            default: '',
            type: String
        },
    },
    created: function(){
        let value = moment(this.value);
        this.year = value.format('YYYY');
        this.month = value.format('M');
        this.day = value.format('D');
    },
    computed: {
        maxDays: function(){
            return moment(this.year+'-'+this.month, 'YYYY-M').daysInMonth();
        },
        days: function(){
            var days = [];
            for(var i = 0; i < this.maxDays; i++){
                days.push(i+1);
            }
            return days
        },
        dateValue: function(){
            return moment(this.year+'-'+this.month+'-'+this.day, 'YYYY-M-D').format('YYYY-MM-DD');
        }
    },
    template: '' +
'<div v-bind:class="className">'+
    '<input type="hidden" v-bind:name="name" v-model="dateValue">'+
    '<div class="form-row">'+
        '<div class="col">'+
            '<select v-model="month" class="form-control">'+
                '<option v-for="(m, index) in months" v-bind:value="index+1">{{m}}</option>'+
            '</select>'+
        '</div>'+
        '<div class="col">'+
            '<select v-model="day" class="form-control">'+
                '<option v-for="d in days" v-bind:value="d">{{d}}</option>'+
            '</select>'+
        '</div>'+
        '<div class="col">'+
            '<input v-model="year" type="number" class="form-control" maxlength="4">'+
        '</div>'+
    '</div>'+
'</div>'
};
