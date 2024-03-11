// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

// ** Third Party Imports
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

import { AddDeliveryType, deliveryDefaultValues, deliverySchema } from 'src/tracker/logic/models/Delivery'
import DeliveryService from 'src/tracker/logic/services/DeliveryService'
import PackageService from 'src/tracker/logic/services/PackageService'
import { useEffect, useState } from 'react'
import { PackageType } from 'src/tracker/logic/models/Package'

interface AddDeliveryDrawerType {
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

const packageService = new PackageService()

const AddDeliveryDrawer = (props: AddDeliveryDrawerType) => {
  // ** Props
  const { open, toggle, onChange } = props

  const [packages, setPackages] = useState<PackageType[]>([])

  // ** Hooks
  const {
    reset,
    control,

    // setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: deliveryDefaultValues,
    mode: 'onChange',
    resolver: yupResolver(deliverySchema)
  })

  const onSubmit = async (data: AddDeliveryType) => {
    const deliveryService = new  DeliveryService()

    console.log("data :::::::: ", data)
    const rep = await deliveryService.post(data);

    if (rep) {
      onChange()
      toggle()
    }

  }

  const handleClose = () => {
    toggle()
    reset()
  }

  const getPackages = async () => {
    const rep = await packageService.list();

    setPackages(rep)
  }

  useEffect(() => {
    getPackages();
  }, [])

  const findPackageById = (idToFind: string): PackageType | undefined => {
    return packages.find((packageItem) => packageItem._id === idToFind);
  };

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
        <Typography variant='h5'> Add an delivery </Typography>
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
            name='package'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomAutocomplete
                freeSolo
                sx={{ mb: 4 }}
                options={packages}
                getOptionLabel={(option: string | PackageType) => {
                  if (typeof option === 'string') {
                    return option;
                  }

                  return `From ${option.from_name} To ${option.to_name}` || '';
                }}
                value={findPackageById(value)}
                onChange={(event, newValue) => {

                  console.log("newValue  :::: ", newValue)

                  if (newValue !== null) {
                    onChange({ target: { value: (newValue as PackageType)._id } })
                  }
                }}
                renderInput={params => (
                  <CustomTextField
                    {...params}
                    variant='filled'
                    label={'Package'}
                    placeholder=''
                    error={Boolean(errors.package)}
                    {...(errors.package && { helperText: errors.package.message })}
                  />
                )}
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

export default AddDeliveryDrawer
