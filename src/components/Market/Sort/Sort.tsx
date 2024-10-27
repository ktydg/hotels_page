import React from 'react'
import { Flex, Select, ComboboxItem } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import classes from './Sort.module.css'

export const Sort = ({
	value,
	setValue,
	data,
}: {
	value: ComboboxItem | null
	setValue: React.Dispatch<React.SetStateAction<ComboboxItem | null>>
	data: { value: string; label: string }[]
}) => {
	return (
		<Flex justify='flex-end'>
			<Select
				className={classes.selector}
				w='100%'
				h={32}
				placeholder='Сортировать'
				styles={{
					input: {
						border: 'none',
						color: 'rgba(107, 107, 107, 1)',
						fontWeight: 700,
						fontSize: '16px',
						lineHeight: '24px',
						padding: '4px 20px 4px 0',
						textAlign: 'right',
					},
					dropdown: {
						borderRadius: '12px',
					},
					option: {
						padding: '8px 12px',
          },
          section: {
            width: '16px'
          }
				}}
				withCheckIcon={false}
				data={data}
				value={value?.value}
				onChange={(_value, option) => setValue(option)}
				rightSection={<IconChevronDown size={16} />}
				comboboxProps={{
					width: '245px',
					position: 'bottom-end',
					dropdownPadding: '8px',
				}}
			/>
		</Flex>
	)
}
