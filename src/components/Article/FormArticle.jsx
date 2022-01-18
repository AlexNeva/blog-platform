
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm, useFieldArray } from 'react-hook-form';
import FormButton from '../Form/FormButton';
import FormControl from '../Form/FormControl';
import classes from './FormArticle.module.css'

function FormArticle({ header, title, descr, body, submitHandler }) {


  const {
    register,
    control,
    formState: {
      errors,
    },
    handleSubmit,

  } = useForm(
    {
      mode: 'onBlur'
    }
  )

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tagList",
  });

  const onSubmit = (data) => {


    const { title, description, body, tagList } = data;

    const newArr = tagList.map(tag => tag.value);



    const articleBody = {
      article: {
        title,
        description,
        body,
        tagList: newArr
      }
    }


    submitHandler(articleBody)

  }

  useEffect(() => {
    append({ value: '' })
  }, [])



  return (
    <div className={classes.Article}>
      <div className={classes.ArticleTitle}>
        {header}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          value={title}
          type='text'
          label='Title'
          placeholder='Title'
          id='title'
          name='title'
          register={register}
          errors={errors}
          options={
            {
              required: 'Required field',
            }
          }
        />
        <FormControl
          value={descr}

          type='text'
          label='Short description'
          placeholder='Title'
          id='description'
          name='description'
          register={register}
          errors={errors}
          options={
            {
              required: 'Required field',
            }
          }
        />
        <FormControl
          value={body}
          type='textarea'
          label='Text'
          placeholder='Text'
          id='body'
          name='body'
          register={register}
          errors={errors}
          options={
            {
              required: 'Required field',
            }
          }
        />
        <div className={classes.Tags}>
          <div className={classes.TagsTitle}>Tags</div>
          <div className={classes.TagsBody}>
            {
              fields.map((field, index) =>
                <div key={field.id} className={classes.TagsRow}>
                  <input
                    type="text"
                    placeholder='Tag'
                    {...register(`tagList.${index}.value`)}
                  />
                  <button
                    className={classes.TagsDelete}
                    type='button'
                    onClick={() => remove(index)}
                  >
                    Delete
                  </button>
                </div>)

            }

            <button
              className={classes.TagsAdd}
              type='button'
              onClick={() => append({ value: '' })}
            >
              Add tag
            </button>
          </div>
        </div>

        <FormButton text='Send' />

      </form>
    </div>
  );
}

FormArticle.defaultProps = {
  header: '',
  title: '',
  descr: '',
  body: '',
  submitHandler: () => { }

};

FormArticle.propTypes = {
  header: PropTypes.string,
  title: PropTypes.string,
  descr: PropTypes.string,
  body: PropTypes.string,
  submitHandler: PropTypes.func

};

export default FormArticle;