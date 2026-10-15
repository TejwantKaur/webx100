#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/2f23ca9dad511af326045420005678650540a904f33e2a019e24a70b3eef32d8/contract';
import startContract from '../../snapshots/2f23ca9dad511af326045420005678650540a904f33e2a019e24a70b3eef32d8/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/bbc7f13daa54d055c7e5681f17cbd7a8dca47afa0816350ba3b26d053218ec82/contract';
import endContract from '../../snapshots/bbc7f13daa54d055c7e5681f17cbd7a8dca47afa0816350ba3b26d053218ec82/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.addColumn({
        schema: 'public',
        table: 'Person',
        column: col('phone', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
