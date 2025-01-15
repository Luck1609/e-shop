import { TypographySm } from './typography'
import { Country, PageProps, SelectOptions } from '@/types'
import { assetUrl, cn } from '@/shared/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { IconCheck, IconChevronDown } from '@tabler/icons-react'
import { usePage } from '@inertiajs/react'
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { debounce } from 'lodash'
import { FormLabel } from '@/components/ui/form'


export function CountryLabel({ data }: { data: Country }) {
  return (
    <div className="flex items-center space-x-2">
      {/* <img src={assetUrl(`storage/flags/${data.code}.svg`)} alt="" className="w-5 h-4" /> */}
      <TypographySm>{data.name}</TypographySm>
    </div>
  )
}


export function formatCountryList(data: Country[]) {
  return data.reduce((countryList: SelectOptions[], country: Country) => ([
    ...countryList,
    {
      label: <CountryLabel data={country} />,
      value: country.id
    }
  ]), [])
}

export function FilterSelector({ options, name, label }: { options: SelectOptions[], name: string, label: ReactNode }) {
  const [open, setOpen] = useState(false)
  const { control, getValues, watch } = useFormContext()
  const state = useRef(options ?? [])
  const [search, setSearch] = useState("")

  const fieldValue = getValues(name)

  const { setValue } = useFormContext()

  const selectedCountry = useMemo(() => options.filter(({ value }) => value === fieldValue)?.[0], [watch(name)])

  useEffect(() => {
    console.log("filter callback fired")
    if (search !== "") {
      const searchResult = options.filter((country) => (country.label as string).match(search))
      console.log("Search results", searchResult)
      state.current = searchResult
    }
    else state.current = options
  }, [search])

  const handleSearch = debounce((query: string) => setSearch(query), 100)


  console.log("Search update from country selection", search, state)

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value } }) => (
        <div>
          <FormLabel className="inline-block mb-1">{label}</FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                // role="combobox"
                // aria-expanded={open}
                className="w-full justify-between"
              >
                {value
                  ? (selectedCountry as SelectOptions).label
                  : "Select country..."}
                <IconChevronDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput
                  placeholder="Select country"
                  className="w-full h-9"
                // onValueChange={handleSearch}
                />

                <CommandList>
                  <CommandEmpty>No country found.</CommandEmpty>
                  <CommandGroup>
                    {state.current.map((country) => (
                      <CommandItem
                        key={country.value}
                        value={country.value}
                        onSelect={(currentValue) => {
                          setValue(name, currentValue === value ? "" : currentValue)
                          setOpen(false)
                        }}
                      >
                        {country.label}
                        <IconCheck
                          className={cn(
                            "ml-auto",
                            value === country.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      )}
    />
  )
}