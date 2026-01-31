"use client";

import {Button} from '@/components/ui/button';
import {Hint} from '@/components/ui/hint';
import {Loader, Plus, User} from 'lucide-react';
import React, {useEffect, useState} from 'react';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';

const Workspace = () => {
  return (
    <>
        <Hint label="Change Workspace">
            <Button className='border border-orange-400 bg-greed-400/10 hover:bg-orange-400/20 text-orange-400 hover:text-orange-300 flex flex-row items-center space-x-1'>
            <User className='size-4 text-orange-400'/>
            <span className='text-sm text-orange-400 font-semibold'>
                Personal Workspace
            </span>

            </Button>
        </Hint>
    </>
  )
}

export default Workspace

