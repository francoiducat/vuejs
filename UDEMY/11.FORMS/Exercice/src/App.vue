<template>
    <div class="container">
        <form v-if="!userData.submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <h1>Form Exercice</h1>
                    <hr>
                    <full-name v-model="userData.fullName"></full-name>
                    <div class="form-group">
                        <label for="mail">mail</label>

                        <input type="text"
                               id="mail"
                               class="form-control"
                               v-model="userData.mail">
                    </div>
                    <div class="form-group">
                        <label for="password">password</label>

                        <input type="password"
                               id="password"
                               class="form-control"
                               v-model="userData.password">
                    </div>
                    <div class="form-group">


                        <label>
                            <input type="radio" value="yes" v-model="userData.storeData">Yes
                        </label>
                        <label>
                            <input type="radio" value="no" v-model="userData.storeData">No
                        </label>
                    </div>
                    <button
                            type="submit"
                            @click.prevent="userData.submitted = true"
                            class="btn btn-primary">Submit
                    </button>

                </div>

                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                </div>
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>

        </form>
        <hr>
        <div class="row" v-if="userData.submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fullName }}</p>
                        <p>Mail: {{ userData.mail}}</p>
                        <p>Password: {{ userData.password}}</p>
                        <p>Store in Database?: {{ userData.storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from "./FullName.vue"

    export default {
        components: {FullName},
        data () {
            return {
                userData: {
                    fullName:'Francois Ducatillon',
                    mail: '',
                    password: '',
                    storeData: false,
                    submitted: false
                }
            }
        }
    }
</script>

<style scoped>
    #on, #off {
        width: 40px;
        height: 20px;
        background-color: lightgray;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }

    #on:hover, #on.active {
        background-color: lightgreen;
    }

    #off:hover, #off.active {
        background-color: lightcoral;
    }
</style>
