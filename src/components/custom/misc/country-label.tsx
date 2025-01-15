import { TypographySm } from './typography'
import { Country, SelectOptions } from '@/types'
import { cn } from '@/shared/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { IconCheck, IconChevronDown } from '@tabler/icons-react'
import { ChangeEvent, ReactNode, useEffect, useMemo, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { debounce } from 'lodash'
import { FormLabel, FormMessage } from '@/components/ui/form'
import { ScrollArea } from '@/components/ui/scroll-area'


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

export const FilterSelector = ({ options, name, label, placeholder }: { options: SelectOptions[], name: string, label: ReactNode, placeholder?: string }) => {
  const [open, setOpen] = useState(false)
  const { control, getValues, watch } = useFormContext()
  const [state, setState] = useState(options ?? [])
  const [search, setSearch] = useState("")

  const fieldValue = getValues(name)

  const { setValue } = useFormContext()

  const selectedCountry = useMemo(() => options.filter(({ value }) => value === fieldValue)?.[0], [watch(name)])

  useEffect(() => {
    console.log("filter callback fired")
    if (search !== "") {
      const searchResult = options.filter((country) => ((country.label as string).toLowerCase()).match(search))
      // console.log("Search results", searchResult)
      setState(searchResult)
    }
    else setState(options)
  }, [search])

  const handleSearch = debounce((e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value), 100)


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
                variant="input"
                size="lg"
                // role="combobox"
                // aria-expanded={open}
                className="w-full justify-between px-3 h-[52px]"
              >
                {value
                  ? (selectedCountry as SelectOptions).label
                  : placeholder}
                <IconChevronDown className="opacity-50 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0 border-none">
              <div className="w-full px-3">
                <input
                  placeholder={placeholder}
                  className="w-full px-3 py-4 mb-1 flex border-none rounded-md bg-white text-base ring-offset-white placeholder:text-slate-500 focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-dark-input dark:ring-offset-slate-950  dark:placeholder:text-dark-default dark:focus-visible:ring-slate-300"
                  onChange={handleSearch}
                />

                {
                  state.length === 0 ? (
                    <></>
                  ) : (
                    <ScrollArea className="w-full h-56 bg-white dark:bg-dark-input rounded-lg">
                      {
                        state.map((option, index: number) => (
                          <li className="flex items-center space-x-2 list-none cursor-pointer p-2" key={index.toString()} onClick={() => {
                            setValue(name, option.value)
                            setOpen(false)
                            setState(options)
                          }}>
                            {
                              selectedCountry?.value === option.value && <IconCheck className="h-4 w-4" />
                            }

                            <TypographySm className={cn("py-1", selectedCountry?.value !== option.value ? "pl-6" : "")}>{option.label}</TypographySm>
                          </li>
                        ))
                      }
                    </ScrollArea>
                  )
                }
              </div>
            </PopoverContent>
          </Popover>

          <FormMessage />
        </div>
      )}
    />
  )
}