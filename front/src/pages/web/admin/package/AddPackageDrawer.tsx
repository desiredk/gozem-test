// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

import { PackageType, packageDefaultValues, packageSchema } from 'src/tracker/logic/models/Package'
import PackageService from 'src/tracker/logic/services/PackageService'
import PickLocation from 'src/tracker/views/map/PickLocation'

interface AddPackageDrawerType {
  open: boolean
  toggle: () => void
  onChange: () => void
}

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(6),
  justifyContent: 'space-between'
}))

const AddPackageDrawer = (props: AddPackageDrawerType) => {
  // ** Props
  const { open, toggle, onChange } = props

  // ** Hooks
  const {
    reset,
    control,

    // setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: packageDefaultValues,
    mode: 'onChange',
    resolver: yupResolver(packageSchema)
  })

  const onSubmit = async (data: PackageType) => {
    const packageService = new  PackageService()

    console.log("data :::::::: ", data)
    const rep = await packageService.post(data);

    if (rep) {
      onChange()
      toggle()
    }

  }

  const handleClose = () => {
    toggle()
    reset()
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <Header>
        <Typography variant='h5'> Add an package </Typography>
        <IconButton
          size='small'
          onClick={handleClose}
          sx={{
            p: '0.438rem',
            borderRadius: 1,
            color: 'text.primary',
            backgroundColor: 'action.selected',
            '&:hover': {
              backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.16)`
            }
          }}
        >
          <Icon icon='tabler:x' fontSize='1.125rem' />
        </IconButton>
      </Header>
      <Box sx={{ p: theme => theme.spacing(0, 6, 6) }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='from_name'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label={ '(From) Name' }
                onChange={onChange}
                placeholder=''
                error={Boolean(errors.from_name)}
                {...(errors.from_name && { helperText: errors.from_name.message })}
              />
            )}
          />
          <Controller
            name='from_address'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label={ '(From) Address' }
                onChange={onChange}
                placeholder=''
                error={Boolean(errors.from_address)}
                {...(errors.from_address && { helperText: errors.from_address.message })}
              />
            )}
          />

          <div style={{ marginTop: '5px' , marginBottom: '5px' }}>
            (From) Location
          </div>
          <Controller
            name='from_location'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <>
                <PickLocation
                  value={value}
                  onChange={onChange}
                />
              </>
            )}
          />
          <div style={{ color: Boolean(errors.from_location) ? '#EA5455' : 'inherit', marginTop: '5px' , marginBottom: '20px', fontSize: "13px" }}>
            { errors.from_location && errors.from_location.lng && errors.from_location.lng.message }
          </div>

          <Controller
            name='to_name'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label={ '(To) Name' }
                onChange={onChange}
                placeholder=''
                error={Boolean(errors.to_name)}
                {...(errors.to_name && { helperText: errors.to_name.message })}
              />
            )}
          />
          <Controller
            name='to_address'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label={ '(To) Address' }
                onChange={onChange}
                placeholder=''
                error={Boolean(errors.to_address)}
                {...(errors.to_address && { helperText: errors.to_address.message })}
              />
            )}
          />

          <div style={{ marginTop: '5px' , marginBottom: '5px' }}>
            (To) Location
          </div>
          <Controller
            name='to_location'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <>
                <PickLocation
                  value={value}
                  onChange={onChange}
                />
              </>
            )}
          />
          <div style={{ color: Boolean(errors.to_location) ? '#EA5455' : 'inherit', marginTop: '5px' , marginBottom: '20px', fontSize: "13px" }}>
            { errors.to_location && errors.to_location.lng && errors.to_location.lng.message }
          </div>

          <Controller
            name='description'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label={ 'Description' }
                onChange={onChange}
                placeholder=''
                error={Boolean(errors.description)}
                {...(errors.description && { helperText: errors.description.message })}
              />
            )}
          />
          <Controller
            name='weight'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                type='number'
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label={ 'Weight' }
                onChange={onChange}
                placeholder=''
                error={Boolean(errors.weight)}
                {...(errors.weight && { helperText: errors.weight.message })}
              />
            )}
          />
          <Controller
            name='width'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                type='number'
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label={ 'Width' }
                onChange={onChange}
                placeholder=''
                error={Boolean(errors.width)}
                {...(errors.width && { helperText: errors.width.message })}
              />
            )}
          />
          <Controller
            name='height'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                type='number'
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label={ 'Height' }
                onChange={onChange}
                placeholder=''
                error={Boolean(errors.height)}
                {...(errors.height && { helperText: errors.height.message })}
              />
            )}
          />
          <Controller
            name='depth'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                type='number'
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label={ 'Depth' }
                onChange={onChange}
                placeholder=''
                error={Boolean(errors.depth)}
                {...(errors.depth && { helperText: errors.depth.message })}
              />
            )}
          />

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button type='submit' variant='contained' sx={{ mr: 3 }}>
              Submit
            </Button>
            <Button variant='tonal' color='secondary' onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Drawer>
  )
}

export default AddPackageDrawer
