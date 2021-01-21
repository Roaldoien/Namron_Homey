'use strict'

const SrZwaveDriver = require('../../lib/SrZwaveDriver')

class MyDriver extends SrZwaveDriver {

  onInit () {
    super.onInit()

    this.onOffFlowTrigger = this.getDeviceTriggerCard('4512730_on_off')
    this.onOffFlowTrigger.registerRunListener(async (args, state) => {
      return true
    })

    this.onOffKeyHeldDownFlowTrigger = this.getDeviceTriggerCard(
      '4512730_on_off_key_held_down')
    this.onOffKeyHeldDownFlowTrigger.registerRunListener(async (args, state) => {
      return true
    })

    this.onOffKeyReleasedFlowTrigger = this.getDeviceTriggerCard('4512730_on_off_key_released')
    this.onOffKeyReleasedFlowTrigger.registerRunListener(async (args, state) => {
      return true
    })

    this.levelFlowTrigger = this.getDeviceTriggerCard('4512730_level')
    this.levelFlowTrigger.registerRunListener(async (args, state) => {
      return true
    })

    this.levelKeyHeldDownFlowTrigger = this.getDeviceTriggerCard(
      '4512730_level_key_held_down')
    this.levelKeyHeldDownFlowTrigger.registerRunListener(async (args, state) => {
      return true
    })

    this.levelKeyReleasedFlowTrigger = this.getDeviceTriggerCard('4512730_level_key_released')
    this.levelKeyReleasedFlowTrigger.registerRunListener(async (args, state) => {
      return true
    })
  }
}

module.exports = MyDriver
