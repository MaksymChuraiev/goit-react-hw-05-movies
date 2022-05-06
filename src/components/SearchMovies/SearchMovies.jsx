import { Container } from 'components/Header/Header.styled';
import { useForm } from 'react-hook-form';
import { Form, FormButton, FormInput, SearchSvg } from './SearchMovies.styled';

export const SearchMovies = ({ onSub }) => {
  const { register, handleSubmit, resetField } = useForm();

  const onSubmit = data => {
    onSub(data.name);
    resetField('name');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput {...register('name')} />
        <FormButton type="submit">
          <SearchSvg />
        </FormButton>
      </Form>
    </Container>
  );
};
