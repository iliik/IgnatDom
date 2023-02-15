import React from 'react'
import {pureAddUser} from '../GreetingContainer'

let name: string
const setName = (a: string) => {
    name = a
}
let error: string
const setError = (a:string) => {
    error = a
}
let added: string
const addUserCallback = (a:string) => {
    added = a
}

beforeEach(() => {
    name = ''
    error = ''
    added = name
})

test('name 1', () => {
    name = '1'
    pureAddUser(name, setError, setName, addUserCallback)
    expect(name).toBe('')
    expect(error).toBe('')
    expect(added).toBe('1')
})
test('name 2', () => {
    name = ''
    pureAddUser(name, setError, setName, addUserCallback)
    expect(name).toBe('')
    expect(error).toBe('Ошибка! Введите имя!')
    expect(added).toBe('')
})
test('name 3', () => {
    name = '    '
    pureAddUser(name, setError, setName, addUserCallback)
    expect(name).toBe("")
    expect(error).toBe('Ошибка! Введите имя!')
    expect(added).toBe('')
})
