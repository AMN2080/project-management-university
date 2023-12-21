import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

function ReportProject() {
  return (
    <Box className="lg:mr-80 p-5 flex flex-col justify-center gap-y-5">
      <div className='flex justify-between'>
        <TextField
          color='secondary'
          label="موضوع"
          size='small'
          maxRows={1}
          variant="standard"
        />
        <Button variant="contained" >ارسال</Button>
      </div>

      <TextField
        color='secondary'
        label="توضیحات"
        multiline
        rows={10}
        defaultValue=""
      />
    </Box>
  )
}

export default ReportProject