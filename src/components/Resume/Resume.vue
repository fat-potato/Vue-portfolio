<template>
<div class="resume">
  <LeftPanel :person="person" />

  <div class="rightCol">
    <div class="section-headline">Experience</div>
    <div class="block" v-for="experience in person.experience" :key="experience.company">
      <div class="block-helper"></div>
      <h3 class="headline">{{experience.position}} - {{experience.company}}</h3>
        <div class="subheadline">{{experience.timeperiod}}</div>
        <p class="info">
          {{experience.description}}
        </p>
    </div>
    <div class="section-headline">Education</div>
    <div class="block" v-for="education in person.education" :key="education.degree">
      <div class="block-helper"></div>
      <div class="headline">{{education.degree}}</div>
        <div class="subheadline">{{education.timeperiod}}</div>
      <p class="info">
        {{education.description}}
      </p>
    </div>
    <div class="section-headline">Interestes</div>
    <div class="block">
      <div class="block-helper"></div>
      <ul class="interests">
        <li><i class="fa fa-camera-retro"></i></li>
        <li><i class="fa fa-cutlery"></i></li>
        <li><i class="fa fa-headphones"></i></li>
        <li><i class="fa fa-comments"></i></li>
        <li><i class="fa fa-coffee"></i></li>
      </ul>
    </div>
  </div>

  <div style="clear:both;"></div>
</div>
</template>


<script>
import yaml from 'js-yaml'
import { PERSON } from '../../assets/data.yml'
import LeftPanel from '@/components/LeftPanel/LeftPanel'

export default {
  name: 'Resume',
  components: {
    LeftPanel
  },
  data () {
    return {
      person: yaml.load(PERSON)
    }
  }
}
</script>
<style lang="scss" scoped src="./styles.scss"></style>
