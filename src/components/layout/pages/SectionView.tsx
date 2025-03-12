import { Card } from '../../cards/Card'
import { Button } from '../../buttons/Button'
import { ReactNode } from 'react'
import { ActionButton } from '../../../types/form';

interface SectionViewProps {
    children: ReactNode;
    title: string;
    description?: string;
    actions?: ActionButton[];
    actionsHeader?: ActionButton[];
}

export const SectionView = ({ children, title, description, actions, actionsHeader }: SectionViewProps) => {

    return (
        <Card>
            <Card.Header className='flex items-center justify-between'>
                <h3>{title}</h3>
                <div className='flex gap-4'>
                    {
                        actionsHeader && actionsHeader.map((btn, i) => (
                            <Button
                                key={i}
                                action={btn.action}
                                label={btn.label}
                                className={btn.className}
                                disabled={btn.disabled}
                                icon={btn.icon}
                                type={btn.type}
                                variant={btn.variant}
                            />
                        ))
                    }
                </div>
            </Card.Header>
            <Card.Body>
                <div className="flex flex-col md:flex-row gap-8">
                    {
                        description &&
                        <div className="text-gray-500 w-full max-w-3xs">
                            <p>{description}</p>
                        </div>
                    }
                    <div className='w-full'>
                        {children}
                    </div>
                </div>
            </Card.Body>
            {
                actions &&
                <Card.Actions>
                    {
                        actions.map((btn, i) => (
                            <Button
                                key={i}
                                action={btn.action}
                                label={btn.label}
                                className={btn.className}
                                disabled={btn.disabled}
                                icon={btn.icon}
                                type={btn.type}
                                variant={btn.variant}
                            />
                        ))
                    }
                </Card.Actions>
            }
        </Card>
    )
}
