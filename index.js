import _ from 'lodash'

export default (config) => ({
  match: (_theme, value) => (
    config && value && _.has(config, value)
  ),
  value: (_theme, value) => config[value],
})
