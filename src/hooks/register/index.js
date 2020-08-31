import { useState, useRef } from 'react';


export const useRegisterContainer = () => {
  const first = useRef();
  const second = useRef();

  const nextTo = () => {
    second.current.classList.add('active');
    first.current.classList.remove('active')
  }

  const previusTo = () => {
    second.current.classList.remove('active');
    first.current.classList.add('active')
  }

  return [first, second, nextTo, previusTo]
}

export const useStateRegister = () => {
  const [form, setForm] = useState({
    email: '',
    name: '',
    day: 0,
    month: '',
    year: 0,
    gener: ''
  });

  const handleChange = () => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  return [form, handleChange]
}
