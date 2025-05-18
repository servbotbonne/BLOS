import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/ToggleGroup';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/DropdownMenu';
import { Sun, Moon, LogOut, Settings, User } from 'lucide-react';

export default function BLOSApp() {
    const [mode, setMode] = useState('viewer');

    const handleModeChange = (newMode) => {
        if (newMode !== 'manager' || (newMode === 'manager' && userHasManagerAccess())) {
            setMode(newMode);
        }
    };

    const userHasManagerAccess = () => {
        // Placeholder logic for manager access
        return true;
    };

    return (
        <div className="p-6 min-h-screen bg-gray-100">
            {/* Top Segment */}
            <div className="flex justify-between items-center mb-4">
                <ToggleGroup type="single" value={mode} onValueChange={handleModeChange} className="space-x-2">
                    <ToggleGroupItem value="viewer" className="px-4 py-2">Viewer</ToggleGroupItem>
                    <ToggleGroupItem value="executor" className="px-4 py-2">Executor</ToggleGroupItem>
                    <ToggleGroupItem value="manager" disabled={!userHasManagerAccess()} className="px-4 py-2">Manager</ToggleGroupItem>
                </ToggleGroup>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="rounded-full">
                            <User size={24} />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => console.log('Settings clicked')}>
                            <Settings className="mr-2" /> Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => console.log('Dark Mode toggled')}>
                            <Moon className="mr-2" /> Dark Mode
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => console.log('Logged out')}>
                            <LogOut className="mr-2" /> Log Out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Action Panel */}
            <Card className="mb-4">
                <CardContent>
                    <div className="flex flex-wrap gap-4">
                        <Button>Navigate</Button>
                        <Button>Generate Reports</Button>
                        <Button>Start Working</Button>
                        <Button>Flag Process</Button>
                        {mode === 'manager' && (
                            <>
                                <Button>Create Process Change</Button>
                                <Button>Execute Process Change</Button>
                            </>
                        )}
                    </div>
                </CardContent>
            </Card>

            {/* Directory Section */}
            <Card className="mb-4">
                <CardContent>
                    <h3 className="text-xl font-bold">Department Directory</h3>
                    <ul className="mt-2 space-y-2">
                        <li>Department A</li>
                        <li>Department B</li>
                        <li>Department C</li>
                    </ul>
                </CardContent>
            </Card>

            {/* Task Panel */}
            <Card>
                <CardContent>
                    <h3 className="text-xl font-bold">Tasks & Flagged Items</h3>
                    <ul className="mt-2 space-y-2">
                        <li>Process Error</li>
                        <li>Assign to Someone</li>
                        <li>Warning</li>
                        <li>Get Notified</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}
