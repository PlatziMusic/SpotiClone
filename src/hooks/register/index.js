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
    username: '',
    email: '',
    gener: '',
    day: '',
    month: '',
    year: ''
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  return [form, handleChange]
}
