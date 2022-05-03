import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormButton, FormInput } from './SearchMovies.styled';

export const SearchMovies = () => {
  const [searchName, setSearchName] = useState('');

  const { register, handleSubmit, resetField } = useForm();
  const onSubmit = data => {
    setSearchName(data.name);
    resetField('name');
    if (data.name === '') {
      console.log(searchName);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormInput {...register('name')} />
      <FormButton type="submit">aaa</FormButton>
    </Form>
  );
};
