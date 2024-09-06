import React from 'react'




function RotaEdit() {
  return (
    <CalendarWrapper>
      <ControlsWrapper>
        <ButtonsWrapper>
          <Button variant='outlined' endIcon={<SaveIcon />}>
            Save
          </Button>
        </ButtonsWrapper>
      </ControlsWrapper>
      <RotaTable></RotaTable>
      <YearCalendarWrapper>{edit?returnYear():null}</YearCalendarWrapper>
    </CalendarWrapper>
  )
}

export default RotaEdit