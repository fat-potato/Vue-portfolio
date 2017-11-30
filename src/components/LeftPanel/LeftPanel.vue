<template>
  <div class="leftCol m_box">
    <div class="heading">
      <img src="../../assets/id2.jpg" id="myselfpic" />
    </div>
    <div class="title">
      <h2>{{person.name.first}} {{person.name.middle}} {{person.name.last}}</h2>
      <div>{{person.position}}</div>
    </div>
    <div class="section-headline">
      Contact
    </div>
    <div class="item">
      <div class="icon">
        <i class="material-icons">account_circle</i>
      </div>
      <div class="text">
        <ul>
          <li> Born {{person.birth.year}} in {{person.birth.location}}</li>
        </ul>
      </div>
    </div>

    <!-- <div class="item">
      <div class="icon">
        <i class="material-icons">location_city</i>
      </div>
      <div class="text">
        <ul>
          <li>{{person.contact.street}}</li>
          <li>{{person.contact.city}}</li>
        </ul>
      </div>
    </div> -->

    <a v-if="person.contact.linkedin" :href="'https://linkedin.com/in/'+person.contact.linkedin" target="_blank">
      <div class="item">
        <div class="icon">
          <i class="fa fa-linkedin"></i>
        </div>
        <div class="text">
          <span>{{person.contact.linkedin}}</span>
        </div>
      </div>
    </a>

    <a :href="'tel:'+person.contact.phone">
      <div class="item">
        <div class="icon">
          <i class="material-icons">phone</i>
        </div>
        <div class="text">
          {{person.contact.phone}}
        </div>
      </div>
    </a>

    <a :href="'mailto:'+person.contact.email">
      <div class="item">
        <div class="icon">
          <i class="material-icons">email</i>
        </div>
        <div class="text">
          {{person.contact.email}}
        </div>
      </div>
    </a>

    <a v-if="person.contact.github" :href="'https://github.com/'+person.contact.github" target="_blank">
      <div class="item">
        <div class="icon">
          <i class="fa fa-github"></i>
        </div>
        <div class="text">
          <span>@{{person.contact.github}}</span>
        </div>
      </div>
    </a>

    <a v-if="person.contact.website" :href="'http://'+person.contact.website" target="_blank">
      <div class="item">
        <div class="icon">
          <i class="material-icons">language</i>
        </div>
        <div class="text">
          <span>{{person.contact.website}}</span>
        </div>
      </div>
    </a>

    <div class="item last">
      <div class="section-headline">
        Skills
      </div>
      <div class="skill" v-for="skill in person.skills" :key="skill.name">
        <div class="right">
          <span>{{skill.name}}&nbsp;</span>
          <div class="progress">
            <div class="determinate" :style="'width: '+skill.level+'%;'">
              <i class="fa fa-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'left-panel',
  props: {
    person: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped src="./styles.scss"></style>
