<template>
<div class="row">
  <div class="col-4">

    <input type="text" v-model="search" placeholder="Search user"  @input="change"/> 
    <ul  class="list-group list-group-flush">
      <li v-on:click="completeDetails(contact)" v-for="contact in filteredList"  v-bind:key="contact"  class="list-group-item">
        <app-post>
          <span slot="title">{{ contact.firstName }}</span>
         
          <span slot="title">{{ contact.lastName }}</span>
        </app-post>
      </li>
    </ul>
    <transition name="modal">
      <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false;">
          <div class="modal">
            <h1>Modal heading</h1>
            <p>This my first modal using vue.js</p>
          </div>
        </div>
      </div>
    </transition>
    <button @click="isOpen = !isOpen;">
      {{ isOpen ? "Close" : "Open" }} modal
    </button>
    </div>

      <div class="col-8 section--right">
        <div class="section-right--details"> 
          <div class="details-title">
            <span>{{selectedContact.firstName}}</span>
            <span>{{selectedContact.lastName}}</span>
           </div>
          <div class="details-group">{{selectedContact.group}}</div>
        </div>    
      </div>
  </div>
  
           

</template>
<script>
import Post from './Post.vue'
import json from '../json/data.json'
import modal from '../modal.js'
import { mapGetters, mapActions } from 'vuex';

export default {
    components: {
        'app-post': Post
    },
     data() {
        return {
          addContactModal: false,
          id: this.$route.params.id,
          myJson: json,
          fullName: '',
          search: '',
          selectedContact: {
            firstName: null,
            lastName: null,
            group: null
          },
          isOpen: false
        }
      },

      computed: {
        filteredList() {
            return this.myJson.filter(contact => {
             
            return contact.firstName.toLowerCase().includes(this.search.toLowerCase())
          })
        }   
      },
     methods: {

       ...mapActions({
         
       }),
     
      fullName () {
        for(item in this.myJson){
          this.fullName =  item.firstName + ' ' + item.lastName
        }
      },

      completeDetails (contact) {

        this.selectedContact.firstName = contact.firstName;
        this.selectedContact.lastName = contact.lastName;
        this.selectedContact.group = contact.group;
       
      }
    
    },
    watch: {

    },

}


</script>
<style scoped>
  .section--right {
    width: 900px;
  }
  .modal-active {
    display: block;
  }
.section-right--details {
  position: absolute;
  top: 50%;
  left: 34%;
}
.details-title {
  font-size: 50px;
  font-weight: 600;
}
.details-group {
  font-size: 30px;
  font-weight: 400;
}
.list-group span{
  margin-right: 5px;
}
.modal {
  width: 500px;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px 3px;
  transition: all 0.2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
}
.fadeIn-enter {
  opacity: 0;
}

.fadeIn-leave-active {
  opacity: 0;
  transition: all 0.2s step-end;
}

.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}
button {
  padding: 7px;
  margin-top: 10px;
  background-color: green;
  color: white;
  font-size: 1.1rem;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}
</style>

