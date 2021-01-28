// Vee Validate
import ptBR from 'vee-validate/dist/locale/pt_BR.json'

import {
  extend,
  localize
} from 'vee-validate'

import {
  email,
  required
} from 'vee-validate/dist/rules'

// Custom rules
import { } from './rules'

extend('email', email)
extend('required', required)

localize('pt_BR', ptBR)
