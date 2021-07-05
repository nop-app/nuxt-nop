import Vue from 'vue'
import VueNop from '@nop-app/vue-nop'

export default async (ctx, inject) => {
  const runtimeConfig = ctx.$config && ctx.$config.nop || {}
  const moduleOptions = <%= serialize(options) %>
  const options = {...moduleOptions, ...runtimeConfig}

  Vue.use(VueNop, {
    router: ctx.app.router,
    ...options,
  })

  ctx.$nop = Vue.$nop
  inject('nop', Vue.$nop)
}
