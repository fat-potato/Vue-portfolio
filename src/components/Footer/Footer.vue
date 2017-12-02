<template>
  <div class="footer">
    <p>© Copyright 2017, All Rights Reserved <br> Design with
    <i class="fa fa-heart"></i> by
      <span>
        <a href="#">Barney Nguyen</a>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  font-size: 14px;
  color: #9a9a9a;
  line-height: 24px;
  font-weight: 300;
}

i.fa-heart {
  color: #ff5252;
  animation: footer_anim 1s infinite;
}

@keyframes footer_anim {
	0%{
        transform: scale(0);
	}
	25%{
        transform: scale(0.5);
	}
	50%{
        transform: scale(1);
	}
}

span {
    a {
      font-weight: 700;
      color: #afafaf;
      text-decoration: none;
      &:hover {
        color: #ff5252;
      }
    }
}

</style>

